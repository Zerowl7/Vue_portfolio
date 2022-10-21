<?php

namespace App\Http\Controllers;

use App\Http\Requests\Contactrequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Redirect;

class ContactController extends Controller
{
    public function __invoke(Contactrequest $request){
        Mail::to('minaevmaxim7@gmail.com')->send(new ContactMail($request->name, $request->email, $request->body));

        return redirect()->back();
    }
}
