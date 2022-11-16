FROM fabiosereno/portfolio.npm:0.0.1

EXPOSE 8080

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
 CMD node healthcheck.js

CMD ["sh", "-c", "npm run analysis dir=${dir}"]