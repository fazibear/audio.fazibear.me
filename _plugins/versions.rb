require "fileutils"

Jekyll::Hooks.register :site, :post_write do |site|
  directory = File.join(site.dest, "version")

  Array(site.data["plugins"]).each do |slug|
    plugin = site.data[slug]
    version = plugin && plugin["version"]
    next if version.to_s.strip.empty?

    FileUtils.mkdir_p(directory)
    File.write(File.join(directory, "#{slug}.txt"), version.to_s)
  end
end
