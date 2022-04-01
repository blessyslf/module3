class CommentsController < ApplicationController
http_basic_authenticate_with :name => "admin", :password => "superstrongpassword", :only => :destroy

		def create
			@event = Event.find(params[:event_id])
			@comment = @event.comments.create(params[:comment].permit(:commenter, :body))
			redirect_to event_path(@event)
		end


	def destroy
		@event = Event.find(params[:event_id])
	@comment = @event.comments.create(params[:comment].permit(:body).merge(user_id: current_user.id))
		@comment.destroy
		redirect_to event_path(@event)
	end
end
