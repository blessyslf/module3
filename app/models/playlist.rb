class Playlist < ApplicationRecord
  scope :filter_by_starts_with, -> (search) { where("name like :search or title like :search or content like :search", search: "%#{search}%")}
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
    mount_uploader :image, ImageUploader
end
