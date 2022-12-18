<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;

use Closure;

class Manager
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check()){
            if(Auth::user()->hasRole('user') || Auth::user()->hasRole('sub-admin')){
                return redirect('/');
            }else{
                return $next($request);
            }
        }else{
            return redirect('/');
        }

    }
}
