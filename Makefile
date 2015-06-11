TEX_FILES=$(wildcard src/*.tex)
IMG_FILES=$(wildcard img/*)
EXAMPLE_FILES=$(wildcard examples/*)


all: out/slides.pdf

clean:
	rm -rf out

out/%.pdf:  src/%.tex $(IMG_FILES) $(EXAMPLE_FILES) Makefile
	mkdir -p out
	pdflatex -interaction nonstopmode -output-directory out $<


