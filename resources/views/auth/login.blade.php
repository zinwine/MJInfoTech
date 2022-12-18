@extends('includes.main')
@section('title','login')
@section('content')

<div class="contaniner" id="Login">
	<div class="row">
			<div class="col-md-4 offset-md-4">

				<form class="form-horizontal" method="POST" action="{{ route('login') }}">
					{{ csrf_field() }}
				  <h4>Login</h4>
				  <div class="form-group">
				    <label for="name">Email</label>
				    <input type="email" name="email" class="form-control" id="name" placeholder="Enter email">
				  </div>


				  <div class="form-group">
				    <label for="password">Password</label>
				    <input type="password" name="password" class="form-control" id="password" placeholder="Password">
				  </div>

					<button class="btn btn-primary  btn-block">
					Login
				  </button>

					<a class="btn btn-link" href="{{ route('password.request') }}">
						Forgot Your Password?
					</a>

				</form>
			</div>
	</div>
</div>


<div class="row">
	<div id="background_a" class="col-md-6">hello</div>
    <div id="background_b" class="col-md-6">world</div>
</div>


<!--************* Footer Start**************-->
@endsection