class UserController < ApplicationController
    def index
        render json:User.all
    end

    def delete_user
        User.find(params[:id]).destroy
        render json: {message: "User #{params[:id]} deleted"}
    end

    def edit_user
        User.find(params[:id]).update(username: params[:username], password: params[:password],profile_pic: params[:profile_pic], email: params[:email]) 
        render json:{message:"Updated Entry #{params[:id]}"}
    end 

    def new_user 
        User.create!(params[:id]).update(username: params[:username], password: params[:password],profile_pic: params[:profile_pic], email: params[:email]) 
        render json:{message:"Created Entry!"}
    end
end