class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :quantity
      t.text :comment

      t.timestamps
    end
  end
end
