FROM fabiosereno/portfolio.npm:1.0.0

EXPOSE 8080

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s \
 CMD node healthcheck.js

CMD ["sh", "-c", "npm run dev dir=${dir}"]