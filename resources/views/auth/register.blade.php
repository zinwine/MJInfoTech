@extends('includes.main')
@section('title','register')
@section('content')


	<div class="contaniner" id="Register">
	<div class="row">
			<div class="col-md-4 offset-md-4">

				<form class="form-horizontal" method="POST" action="{{ route('register') }}">
					{{ csrf_field() }}

					<h3>Register</h3>
					<div class="form-group row">
						<div class="col-md-6">
							<label for="firstname">First Name</label>
							<input type="text" name="f_name" class="form-control" id="firstname" placeholder="First Name">
						</div>
						<div class="col-md-6">
							<label for="lastname">Last Name</label>
							<input type="text" name="l_name"  class="form-control" id="lastname"  placeholder="Last Name">
						</div>
					</div>
					  <div class="form-group">
				    <label for="username">Username</label>
				    <input type="text" name="name"  class="form-control" id="username"  placeholder="Username">
				  </div>
				  <div class="form-group">
				    <label for="email">Email address</label>
				    <input type="email" name="email"  class="form-control" id="email" placeholder="Enter email">
				  </div>

				  <div class="form-group">
				    <label for="password">Password</label>
				    <input type="password" name="password"  class="form-control" id="password" placeholder="Password">
				  </div>

				  <div class="form-group">
				    <label for="conpassword">Confirm Password</label>
				    <input type="password" name="password_confirmation"  class="form-control" id="conpassword" placeholder="Confirm Password">
				  </div>

				  <button class="btn btn-primary  btn-block">
					Register
				  </button>

				</form>
			</div>
	</div>
</div> 


<div class="row">
	<div id="background_a" class="col-md-6"></div>
    <div id="background_b" class="col-md-6"></div>
</div>

<!--************* Footer Start**************-->
@endsection