class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :quantity
      t.text :comment
      t.belongs_to :departments, null: false, foreign_key: true

      t.timestamps
    end
  end
end
