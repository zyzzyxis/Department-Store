class CreateDepartments < ActiveRecord::Migration[6.1]
  def change
    create_table :departments do |t|
      t.string :item
      t.integer :inventory

      t.timestamps
    end
  end
end
