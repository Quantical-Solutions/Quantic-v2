<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        //$user = User::where('id', 1)->get()->toArray();
        //dump($user);
        return view('pages/home');
    }
}
