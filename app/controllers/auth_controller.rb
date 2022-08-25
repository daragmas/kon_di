require 'jwt'
class AuthController < ApplicationController
    skip_before_action :verify_authenticity_token
    def login
        user = User.find_by(username: params[:username])
        user_password = user["password"]
        # payload = {data: params[:password]}
        # token = JWT.encode payload, nil, 'none'
    #    '
        # if user["password"] == token
            # render json: {hashed_user: hashed_user}
        # else 
            # render json: {message: 'failure', user_password: user["password"], hash: token}
        # end
        # {user_password: user["password"], entered_password: decoded_token}
        

        token = user_password
        decoded_token = JWT.decode token, nil, false
        # render json: { token_id: decoded_token[0]["data"], param_id: params[:id].to_i}
        # if decoded_token[0]["data"] == params[:id].to_i
        # render json:Entry.where(user_id:params[:id])
        # else
        # render json: {message: 'unsuccessfull'}
        # end
        # render json: {token: token, user_password: user_password}
        if decoded_token[0]["data"] == params[:password]
            payload = {data: user["username"]}
            hashed_user = JWT.encode payload, nil, 'none'
            render json: {hashed_user: hashed_user}, status: :ok
        else
            render json: {message: "not validated"}, status: 404
        end
    end
end