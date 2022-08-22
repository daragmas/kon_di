class Entry < ActiveRecord::Migration[7.0]
  def change
    create_table :entries do |t| 
      t.integer :user_id
      t.text :content
      t.timestamp :date
      t.string :title
    end
  end
end
