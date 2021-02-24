class DropTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :departments
  end
end
