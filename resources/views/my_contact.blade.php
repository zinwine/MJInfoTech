
@extends('includes.main')
@section('title','Contact')
@section("content")

	<div class="row mt-4">
		<img src="{{asset('project/img/contact.jpg')}}" alt="">
	</div>

	<div class="container my-5" id="Contact">
		<div class="row">
			<div class="col-md-6 " id="Map_Container">

				<legend class="bg-info pl-3 text-white rounded mb-3 py-1">
					Map

					<i class="fa fa-window-maximize pull-right btn" id="Map_maximize"></i>
					<i  class="fa fa-window-minimize pull-right btn " id="Map_minimize"></i>
				</legend>

				<div id="map">
				</div>

			</div>

			<div class="col-md-6 " id="Contact_info">
				<div class="row">
					<div class="col-sm-12">
						<legend class="bg-info pl-3 text-white rounded mb-3 py-1">Contact Form</legend>
						<form action="">
							<div class="row">
								<div class="col-md-6 mb-3">
									<input type="text" placeholder="Name" class="form-control">
								</div>
								<div class="col-md-6">
									<input type="number" placeholder="Phone Number" class="form-control">
								</div>
							</div>
							<input type="email" placeholder="Email" class="form-control mt-3">

							<textarea class="mt-3 form-control" name="" id=""  rows="8" placeholder="Message"></textarea>
							<button type="submit" class="btn btn-info mt-3">Send</button>
						</form>
					</div>
				</div>
			</div>


		</div>
	</div>

@endsection


