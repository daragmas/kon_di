class EntryController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        render json:Entry.all
    end

    def entries_by_user
        render json:Entry.where(user_id:params[:id])
    end

    def delete_entry
        Entry.find(params[:id]).destroy
        render json:{message:"Deleted Entry #{params[:id]}"}
    end

    def edit_entry
        Entry.find(params[:id]).update(content:params[:content])
        render json:{message:"Updated Entry #{params[:id]}"}
    end

    def new_entry
        #replace user_id with header!!!
        Entry.create!(user_id:params[:user_id], title:params[:title], content:params[:content])
        render json:{message:"Created Entry!"}
    end
end