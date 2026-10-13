module Jekyll
  class PluginPages < Generator
    safe true

    def generate(site)
      site.data.each_value do |plugin|
        next unless plugin.is_a?(Hash) && plugin.key?('slug')
        page = PageWithoutAFile.new(site, site.source, plugin.fetch('slug'), 'index.html')
        page.content = ''
        page.data.merge!(
          'layout' => 'plugin',
          'plugin' => plugin,
          'title' => plugin.fetch('name'),
          'description' => plugin.fetch('description')
        )
        site.pages << page
      end
    end
  end
end
