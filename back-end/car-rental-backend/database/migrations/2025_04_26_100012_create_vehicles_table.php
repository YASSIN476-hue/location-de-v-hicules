<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('vehicles', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->decimal('price', 8, 2);
        $table->string('image');
        $table->string('brand');
        $table->string('type'); // SUV, Sportive, etc.
        $table->string('transmission'); // Automatique, Manuelle
        $table->string('fuel'); // Diesel, Essence, etc.
        $table->text('description');
        $table->integer('places');
        $table->foreignId('category_id')->constrained()->onDelete('cascade'); // Clé étrangère vers categories
        $table->timestamps();
    });
}
};
