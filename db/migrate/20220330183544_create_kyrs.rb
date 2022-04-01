class CreateKyrs < ActiveRecord::Migration[6.1]
  def change
    create_table :kyrs do |t|
      t.string :name
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
