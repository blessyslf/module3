class RemoveAuthorFromPlaylist < ActiveRecord::Migration[6.1]
  def change
    remove_column :playlists, :author, :string
  end
end
