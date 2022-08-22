Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #Entry Routes
  #get all entries
  get "/entries", to: "entry#index"
  #get entry by user id
  get "/entries/:id", to: "entry#entries_by_user"
  #delete entry
  delete "/entries/delete/:id", to: "entry#delete_entry"
  #edit entry
  patch "/entries/edit/:id", to: "entry#edit_entry"
  #create new entry
  post "/entries", to: "entry#new_entry"

  #User Routes
  #get all users
  get "/users", to: "user#index"
  #delete user
  delete "/users/delete/:id", to: "user#delete_user"
  patch "/user/edit/:id", to: "user#edit_user"
  post "/users", to: "user#new_user"


  #YAy Organization
end
