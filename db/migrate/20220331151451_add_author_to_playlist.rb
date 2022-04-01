class AddAuthorToPlaylist < ActiveRecord::Migration[6.1]
  def change
    add_column :playlists, :author, :string
  end
end
