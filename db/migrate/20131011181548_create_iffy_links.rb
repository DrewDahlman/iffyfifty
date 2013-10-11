class CreateIffyLinks < ActiveRecord::Migration
  def change
    create_table :iffy_links do |t|
      t.string :url
      t.string :user
      t.integer :clicks, :default => 0
      t.boolean :flag, :default => false
      t.boolean :iffy, :default => false
      t.integer :views, :default => false
      t.string :title

      t.timestamps
    end
  end
end
