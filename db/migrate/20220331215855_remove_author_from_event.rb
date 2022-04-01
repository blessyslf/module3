class RemoveAuthorFromEvent < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :author, :string
  end
end
