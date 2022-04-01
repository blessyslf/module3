class RemoveAuthorFromGroup < ActiveRecord::Migration[6.1]
  def change
    remove_column :groups, :author, :string
  end
end
