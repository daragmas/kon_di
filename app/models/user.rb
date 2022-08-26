class User < ActiveRecord::Base
    encrypts :password
end