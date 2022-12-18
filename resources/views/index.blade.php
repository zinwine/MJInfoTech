@extends('includes.main')
@section('title','index')
@section('content')
    <!--************* Image Slider Start**************-->

	<div id="wowslider-container1" class="mt-3">
	<div class="ws_images"><ul>
			<li><img src="{{asset('project/data1/images/Degital Marketing.png')}}" alt="Digital Marketing" title="Digital Marketing" id="wows1_0"/></li>
			<li><img src="{{asset('project/data1/images/Web-development.png')}}" alt="Website Marketing" title="Website Marketing" id="wows1_1"/></li>
			<li><img src="{{asset('project/data1/images/Tele Marketing.png')}}" alt="Tele Marketing" title="Tele Marketing" id="wows1_2"/></li>
			<li><a href="http://wowslider.net"><img src="{{asset('project/data1/images/Branding.png')}}" alt="Brand Marketing" title="Brand Marketing" id="wows1_3"/></a></li>
			<li><img src="{{asset('project/data1/images/Facebook.png')}}" alt="Facebook Campaign" title="Facebook Campaign" id="wows1_4"/></li>
		</ul></div>
		<div class="ws_bullets"><div>
			<a href="#" title="Digital Marketing"><span>1</span></a>
			<a href="#" title="Website Marketing"><span>2</span></a>
			<a href="#" title="Tele Marketing"><span>3</span></a>
			<a href="#" title="Brand Marketing"><span>4</span></a>
			<a href="#" title="Facebook Campaign"><span>5</span></a>
		</div></div><div class="ws_script" style="position:absolute;left:-99%"><a href="http://wowslider.com">wowslideshow</a> by WOWSlider.com v8.7</div>
		<div class="ws_shadow"></div>
	</div>

	<!--************* Image Slider End**************-->

	<!--************* Content Start**************-->

	<div class="container">
		<div class="row text-center">

			<div class="col-md-12 py-5">
				<p class="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dolorum maxime, non minima fugiat iusto. Facere optio itaque laudantium. Molestiae odit excepturi rerum alias, illum sed quam, architecto cupiditate nulla.</p>
			</div>

			<div class="col-md-6">
				<div class="col-md-12">
					<a href="#">
						<img src="{{asset('project/img/Degital Marketing.png')}}" class="pt-4" alt="No Image Available">
					</a>
				</div>
				<div class="col-md-12">
					<a href="#" class="btn service-title">
						<h4 class="pt-3 hvr-bounce-in">Digital Marketing</h4>
					</a>
					<p class="pt-1">The Digital Marketing Institute is the global standard in digital marketing &amp; social selling education with over 20000 professionals worldwide...</p>
					<p>
						<a href="#" class="btn btn-outline-primary readmore">
							<i class="fa fa-plus-circle mr-2"></i>Read More...
						</a>
					</p>
					<br>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-12">
					<a href="#">
						<img src="{{asset('project/img/Tele Marketing.png')}}" class="pt-4" alt="No Image Available">
					</a>
				</div>
				<div class="col-md-12">
					<a href="#" class="btn service-title">
						<h4 class="pt-3 hvr-push">TeleMarketing</h4>
					</a>
					<p class="pt-1">Telemarketing is a very common form of marketing companies use to connect with potential customers of their products or services. Historically, telemarketing consisted of companies making telephone calls to existing or potential customers...</p>
					<p>
						<a href="#" class="btn btn-outline-primary readmore">
							<i class="fa fa-plus-circle mr-2"></i>Read More...
						</a>
					</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-12">
					<a href="#">
						<img src="{{asset('project/img/Branding.png')}}" class="pt-4" alt="No Image Available">
					</a>
				</div>
				<div class="col-md-12">
					<a href="#" class="btn service-title">
						<h4 class="pt-3 hvr-push">Branding</h4>
					</a>
					<p class="pt-1">A brand is a name, term, design, symbol, or any other feature that identifies one seller’s good or service as distinct from those of other sellers...</p>
					<p>
						<a href="#" class="btn btn-outline-primary readmore">
							<i class="fa fa-plus-circle mr-2"></i>Read More...
						</a>
					</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-12">
					<a href="#">
						<img src="{{asset('project/img/Web-development.png')}}" class="pt-4" alt="No Image Available">
					</a>
				</div>
				<div class="col-md-12">
					<a href="#" class="btn service-title">
						<h4 class="pt-3 hvr-push">Web Service</h4>
					</a>
					<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus magni reprehenderit dolor quas. Sint minus veritatis qui incidunt maxime aspernatur officia. Ea cum veritatis saepe illum optio odit amet inventore!</p>
					<p>
						<a href="#" class="btn btn-outline-primary readmore">
							<i class="fa fa-plus-circle mr-2"></i>Read More...
						</a>
					</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="col-md-12">
					<a href="#">
						<img src="{{asset('project/img/Facebook.png')}}" class="pt-4" alt="No Image Available">
					</a>
				</div>
				<div class="col-md-12">
					<a href="#" class="btn service-title">
						<h4 class="pt-3 hvr-push">Facebook Page Management</h4>
					</a>
					<p class="pt-1">We've got a MASSIVE collection of tips and pointers to help you master Facebook marketing and advertising, one of the most effective ways to do social media marketing...</p>
					<p>
						<a href="#" class="btn btn-outline-primary readmore">
							<i class="fa fa-plus-circle mr-2"></i>Read More...
						</a>
					</p>
				</div>
			</div>
		</div>
	</div>

	<!--************* Content End**************-->

@endsection

