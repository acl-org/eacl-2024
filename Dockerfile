FROM jekyll/jekyll:4.0.1

COPY ./Gemfile *.gemspec ./

RUN bundle install

EXPOSE 4000
EXPOSE 35729

ENTRYPOINT jekyll serve --livereload
