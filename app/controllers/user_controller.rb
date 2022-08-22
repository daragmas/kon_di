class UserController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        render json:User.all
        puts headers
    end

    def delete_user
        User.find(params[:id]).destroy
        render json: {message: "User #{params[:id]} deleted"}
    end

    def edit_username
       user = User.find(params[:id]).update(username: params[:username])
        render json:{message:"Updated username for user: #{params[:id]}"}
    end 


    def edit_password
       user = User.find(params[:id]).update(password: params[:password])
        render json:{message:"Updated password for user: #{params[:id]}"}
    end 

    def edit_profile_pic
       user = User.find(params[:id]).update(profile_pic: params[:profile_pic])
        render json:{message:"Updated profile pic for user:  #{params[:id]}"}
    end 


    def edit_email
       user = User.find(params[:id]).update(email: params[:email])
        render json:{message:"Updated email for user:  #{params[:id]}"}
    end 

    

    def new_user 
        User.create!(params[:id]).update(username: params[:username], password: params[:password],profile_pic: params[:profile_pic], email: params[:email]) 
        render json:{message:"Created user!"}
    end
end