class Group < ApplicationRecord
		validates :name, :presence => true
		validates :title, :presence => true,
											:length => { :minimum => 5 }
                      mount_uploader :image, ImageUploader
end
