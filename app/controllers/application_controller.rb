class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  	if params[:hash]
  		hash = Base64.decode64(params[:hash])
	  	@a = hash.split('&')[0]
	  	@b = hash.split('&')[1]
	  	@c = hash.split('&')[2]

	  	@link_a = IffyLink.find_by_id(@a)
	  	@link_b = IffyLink.find_by_id(@b)
	  	@winner = IffyLink.find_by_id(@c)
	  	@winner_id = @winner.id

	  	@a_title = @link_a.title
	  	@b_title = @link_b.title
	  	
	  	@a_id = @link_a.id
	  	@b_id = @link_b.id

	  	@a_url = @link_a.url
	  	@b_url = @winner.url
    else
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
    	redirect_to("/iffy/#{@url}")
    end
  end

  def terms

  end

  def submit

  end

  def rules

  end
end
