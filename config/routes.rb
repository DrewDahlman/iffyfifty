Iffyfifty::Application.routes.draw do
  resources :iffy_links

  get "get_iffy" => "iffy_links#get_link"
  get "flag/:id" => "iffy_links#flag"
  get "submit" => "application#submit"
  get "/" => "application#index"
  get "/iffy/:hash" => "application#index"

  post "/save" => "iffy_links#create"
end
