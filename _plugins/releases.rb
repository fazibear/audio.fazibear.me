# json = `gh release view --json tagName,assets`
# releases = JSON.parse(json)
#
# Jekyll::Hooks.register :site, :post_read do |site|
#   site.data["version"] = releases["tagName"]
#   site.data["windows"] = releases["assets"].select{|i| i["url"].match("windows") }.first["url"]
#   site.data["macos"] = releases["assets"].select{|i| i["url"].match("macos") }.first["url"]
#   site.data["linux"] = releases["assets"].select{|i| i["url"].match("linux") }.first["url"]
#
#   puts site.data
# end
#
# Jekyll::Hooks.register :site, :post_write do |site|
#   file = File.join(site.dest, 'current_version.txt')
#   File.write(file, releases["tagName"])
# end
