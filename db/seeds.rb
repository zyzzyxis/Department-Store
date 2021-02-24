# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Department.destroy_all
Item.destroy_all

10.times do
  s = Department.create(item: Faker::DcComics.villain, inventory: 4)
  4.times do 
    
    s.items.create(quantity: Faker::Number.non_zero_digit, comment: Faker::Kpop.ii_groups)
   
  end
end
puts "seeded #{Department.all.size} Departments"
puts "first department name: #{Department.first.name}"
puts "seeded #{Item.all.size} Items"