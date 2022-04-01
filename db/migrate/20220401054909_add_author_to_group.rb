class AddAuthorToGroup < ActiveRecord::Migration[6.1]
  def change
    add_column :groups, :author, :string
  end
end
