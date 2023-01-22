using Portfolio.Core.Services;
using Portfolio.UniqueDataEntry.Interfaces;
using Portfolio.UniqueDataEntry.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://*:3003");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Services
builder.Services.AddScoped<IUniqueDataEntryUtil, UniqueDataEntryUtil>();

builder.Services.AddHealthChecks();

var app = builder.Build();

app.MapHealthChecks("/healthcheck");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
