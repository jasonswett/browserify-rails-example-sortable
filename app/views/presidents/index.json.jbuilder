json.array!(@presidents) do |president|
  json.extract! president, :id, :name
  json.url president_url(president, format: :json)
end
