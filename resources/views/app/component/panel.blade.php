
    <div class="row">
        <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
        	<div class="panel  with-scroll" zoom-in>
        		<div class="panel-heading clearfix">
        			<h3 class="panel-title">{{$title}}</h3>
        		</div>
        		<div class="panel-body height-fixed">
        			{{$body}}
        		</div>
        		@if(isset($footer))
        		<div class="panel-footer">
        			<div class="clearfix">
        				{{$footer}}
        			</div>
        		</div>
        		@endif
        	</div>
        </div>
    </div>

