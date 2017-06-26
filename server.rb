require "json"
require "pry"
require "sinatra"
require "sinatra/json"

set :bind, "0.0.0.0"  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

# API ENDPOINTS
get "/api/v1/pizzas" do
  pizzas = JSON.parse(File.read("data/pizzas.json"))

  content_type :json
  json pizzas
end

post "/api/v1/pizzas" do
  current_pizzas = JSON.parse(File.read("data/pizzas.json"))

  pizza = JSON.parse(request.body.read)
  pizza["id"] = current_pizzas.count

  current_pizzas["pizzas"] << pizza
  File.write("data/pizzas.json", JSON.pretty_generate(current_pizzas))

  content_type :json
  status 201
  json pizza
end

# SINATRA VIEWS ROUTES
get "/" do
  erb :index
end
