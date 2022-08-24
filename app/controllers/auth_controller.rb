require 'jwt'
class AuthController < ApplicationController
    skip_before_action :verify_authenticity_token
    def login
        payload = { data: params[:password] }
        # IMPORTANT: set nil as password parameter
        token = JWT.encode payload, nil, 'none'
        # eyJhbGciOiJub25lIn0.eyJkYXRhIjoidGVzdCJ9.

        # Set password to nil and validation to false otherwise this won't work
        # decoded_token = JWT.decode token, nil, false

        # # Array
        # # [
        # #   {"data"=>"test"}, # payload
        # #   {"alg"=>"none"} # header
        # # ]
        # puts decoded_token
       user = User.find_by(username: params[:username])
        # render json: user["password"]
        # render json: token
        if user["password"] == token
            render json: {hashed_password: user[:id]}
        else 
            render json: {message: 'failure', user_password: user["password"], hash: token}
        end
        # render json: request.headers["HTTP_COOKIE"]
        #Cookie in

    end
end