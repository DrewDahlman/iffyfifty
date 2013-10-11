class IffyLinkSerializer < ActiveModel::Serializer
  attributes :id, :url, :user, :clicks, :flag, :iffy, :views
end
