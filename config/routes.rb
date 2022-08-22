Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #Entry Routes
  get "/entries", to: "entry#index"
  get "/entries/:id", to: "entry#entries_by_user"
  delete "/entries/delete/:id", to: "entry#delete_entry"
  patch "/entries/edit/:id", to: "entry#edit_entry"
  post "/entries", to: "entry#new_entry"

  #User Routes
  get "/users", to: "user#index"


  #YAy Organization
end
