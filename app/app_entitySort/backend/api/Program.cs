using Portfolio.Core.Services;
using Portfolio.EntitySort.Interfaces;
using Portfolio.EntitySort.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://*:3005");

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<TestService, TestService>();

// Services
builder.Services.AddScoped<IEmployeeSortUtil, EmployeeSortUtil>();

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
