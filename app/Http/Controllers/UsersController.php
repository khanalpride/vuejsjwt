<?php

namespace App\Http\Controllers;

use Auth;
use App\Http\Requests;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['only' => ['login', 'register']]);
    }

    public function login(LoginRequest $request)
    {
        if(Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['api_token' => Auth::user()->api_token]);
        }

        // return response([''])
    }
}
