class DropItemTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :items
  end
end
