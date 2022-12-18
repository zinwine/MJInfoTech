<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'PageController@index');

Route::get('/index', 'PageController@index');

Route::get('/home', 'PageController@index');

Route::get('/about', 'PageController@about');

Route::get('/contact', 'PageController@contact');

Route::get('/digital', 'PageController@digital');

Route::get('/branding', 'PageController@branding');

Route::get('/facebook', 'PageController@facebook');

Route::get('/tele', 'PageController@tele');

Route::post('contact','PageController@contactStore');

Route::post('/search','Admin\AdminController@search');

Route::post('/change-password', 'Admin\AdminController@changePassword');

Route::get('logout','Auth\LoginController@logout');

Route::get('register/verify/{token}', 'Auth\RegisterController@verify');

Route::group(array('prefix'=>'admin','namespace'=>'Admin','middleware'=>'manager'),function (){

    Route::get('/dashboard','AdminController@dashboard');

    // Route::get('/users','AdminController@dashboard');

    Route::get('/users','AdminController@user');

    Route::get('/user/edit/{id}','AdminController@userEdit');
    Route::post('/user/edit/{id}','AdminController@userUpdate');

    Route::get('/profile','AdminController@profile');
    Route::post('/profile','AdminController@profileUpdate');

    Route::get('contact','AdminController@contact');
    Route::get('contact/delete/{id}','AdminController@contactDestroy');
    Route::get('contact/show/{id}','AdminController@contactShow');

});

Route::group(array('prefix'=>'sub','middleware'=>'sub'),function (){

    Route::get('/contact','Admin\AdminController@contact');
    Route::get('/contact/{id}/show','Admin\AdminController@contactShow');
    Route::get('/index', 'Admin\AdminController@profile');
    Route::get('/users', 'Admin\AdminController@users');
    Route::post('/search','Admin\AdminController@search');

});

//Route::get('/home', 'HomeController@index')->name('home');
