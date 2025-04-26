<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'vehicle_id' => 'required|exists:vehicles,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
        ]);

        $vehicle = \App\Models\Vehicle::find($validated['vehicle_id']);
        $days = \Carbon\Carbon::parse($validated['end_date'])->diffInDays($validated['start_date']);
        $totalPrice = $vehicle->price * $days;

        $reservation = Reservation::create([
            'user_id' => auth()->id(),
            'vehicle_id' => $validated['vehicle_id'],
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
            'total_price' => $totalPrice,
        ]);

        return response()->json($reservation, 201);
    }

    public function index()
    {
        $reservations = Reservation::where('user_id', auth()->id())->get();
        return response()->json($reservations);
    }
}