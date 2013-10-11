class IffyLinksController < ApplicationController
	skip_before_filter :verify_authenticity_token 

	def get_link
		@a_offset = rand(IffyLink.count)
		@a_rand_record = IffyLink.first(:offset => @a_offset)
		@b_offset = rand(IffyLink.count)
		@b_rand_record = IffyLink.first(:offset => @b_offset)

		winner = rand(0..1)

    	@a = @a_rand_record.id
	  	@b = @b_rand_record.id

	  	if winner == 0
	  		@c = @a_rand_record.id
	  	else 
	  		@c = @b_rand_record.id
	  	end

    	@url = Base64.encode64("#{@a}&#{@b}&#{@c}")
    	render :json => {:url => @url}, :root => false
	end

	def flag
		# render :json => {:flagging => params[:id]}, :root => false
		@link = IffyLink.find_by_id(params[:id])
		@link.delete
	end

	def count_click

	end

	def create
		if params[:url].match("http")
			@link = IffyLink.new
			@link.title = params[:title]
			@link.url = params[:url]
			@link.iffy = params[:iffy]
			@link.save
			render :json => @link, :root => false
			# render :json => {:title => params[:title], :url => params[:url], :iffy => params[:iffy]}
		else
			render :text => "Oops! You need to include a valid url!"
		end
	end
end
