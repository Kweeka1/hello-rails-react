class Api::GreetingsController < Api::ApplicationController
  def index
    greeting = Greeting.find_by(id: rand(1..Greeting.count))
    render json: greeting
  end
end
